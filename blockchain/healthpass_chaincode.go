package main

import (
	"encoding/json"
	"fmt"
	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

// HealthPass defines a digital health record
type HealthPass struct {
	ID        string `json:"id"`
	UserID    string `json:"userID"`
	TestType  string `json:"testType"`  // e.g., HIV, HPV, COVID-19
	Result    string `json:"result"`    // e.g., Positive, Negative
	Timestamp string `json:"timestamp"` // e.g., 2025-05-01T10:00:00Z
	IssuedBy  string `json:"issuedBy"`  // e.g., Hospital or Clinic
}

// SmartContract provides functions for managing health records
type SmartContract struct {
	contractapi.Contract
}

// InitLedger adds test data to the ledger
func (s *SmartContract) InitLedger(ctx contractapi.TransactionContextInterface) error {
	records := []HealthPass{
		{ID: "1", UserID: "user001", TestType: "HIV", Result: "Negative", Timestamp: "2025-04-01T10:00:00Z", IssuedBy: "Colombo Hospital"},
		{ID: "2", UserID: "user002", TestType: "HPV", Result: "Positive", Timestamp: "2025-03-10T09:30:00Z", IssuedBy: "Kandy Clinic"},
	}

	for _, record := range records {
		data, err := json.Marshal(record)
		if err != nil {
			return err
		}
		err = ctx.GetStub().PutState(record.ID, data)
		if err != nil {
			return fmt.Errorf("failed to insert record %s: %v", record.ID, err)
		}
	}

	return nil
}

// CreateHealthPass adds a new health pass to the ledger
func (s *SmartContract) CreateHealthPass(ctx contractapi.TransactionContextInterface, id, userID, testType, result, timestamp, issuedBy string) error {
	existing, _ := ctx.GetStub().GetState(id)
	if existing != nil {
		return fmt.Errorf("record with ID %s already exists", id)
	}

	record := HealthPass{
		ID:        id,
		UserID:    userID,
		TestType:  testType,
		Result:    result,
		Timestamp: timestamp,
		IssuedBy:  issuedBy,
	}
	data, err := json.Marshal(record)
	if err != nil {
		return err
	}

	return ctx.GetStub().PutState(id, data)
}

// ReadHealthPass returns a health pass by ID
func (s *SmartContract) ReadHealthPass(ctx contractapi.TransactionContextInterface, id string) (*HealthPass, error) {
	data, err := ctx.GetStub().GetState(id)
	if err != nil {
		return nil, fmt.Errorf("failed to read record %s: %v", id, err)
	}
	if data == nil {
		return nil, fmt.Errorf("health pass %s does not exist", id)
	}

	var pass HealthPass
	if err := json.Unmarshal(data, &pass); err != nil {
		return nil, err
	}
	return &pass, nil
}

// GetAllHealthPasses returns all health passes on the ledger
func (s *SmartContract) GetAllHealthPasses(ctx contractapi.TransactionContextInterface) ([]*HealthPass, error) {
	resultsIterator, err := ctx.GetStub().GetStateByRange("", "")
	if err != nil {
		return nil, err
	}
	defer resultsIterator.Close()

	var passes []*HealthPass
	for resultsIterator.HasNext() {
		queryResponse, err := resultsIterator.Next()
		if err != nil {
			return nil, err
		}

		var pass HealthPass
		err = json.Unmarshal(queryResponse.Value, &pass)
		if err != nil {
			return nil, err
		}
		passes = append(passes, &pass)
	}
	return passes, nil
}

func main() {
	chaincode, err := contractapi.NewChaincode(new(SmartContract))
	if err != nil {
		panic(fmt.Sprintf("Error creating chaincode: %v", err))
	}

	if err := chaincode.Start(); err != nil {
		panic(fmt.Sprintf("Error starting chaincode: %v", err))
	}
}
