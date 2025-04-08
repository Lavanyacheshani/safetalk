"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, MessageSquare, Shield, Heart, ThumbsUp, MessageCircle, Eye, Lock } from "lucide-react"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("support")
  const [showPostForm, setShowPostForm] = useState(false)
  const [postTitle, setPostTitle] = useState("")
  const [postContent, setPostContent] = useState("")

  const handleCreatePost = (e) => {
    e.preventDefault()
    // In a real app, this would submit the post to the backend
    alert(
      "In a real application, your anonymous post would be submitted for moderation before appearing in the community.",
    )
    setShowPostForm(false)
    setPostTitle("")
    setPostContent("")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">SafeSpace Community</h1>
          <p className="text-lg text-gray-600 mb-6">
            Share experiences and find support in our anonymous, moderated forums where you can connect with others
            facing similar challenges.
          </p>
          <div className="flex justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => setShowPostForm(true)}>
              <MessageSquare className="mr-2 h-4 w-4" />
              Create New Post
            </Button>
          </div>
        </div>

        {showPostForm ? (
          <Card className="max-w-2xl mx-auto mb-10">
            <CardHeader>
              <CardTitle>Create Anonymous Post</CardTitle>
              <CardDescription>
                Your identity will remain completely anonymous. All posts are moderated for safety.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreatePost}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="post-title" className="block text-sm font-medium text-gray-700 mb-1">
                      Post Title
                    </label>
                    <Input
                      id="post-title"
                      placeholder="Enter a clear, concise title for your post"
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="post-content" className="block text-sm font-medium text-gray-700 mb-1">
                      Post Content
                    </label>
                    <Textarea
                      id="post-content"
                      placeholder="Share your experience or question..."
                      className="min-h-[200px]"
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                      required
                    />
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-md">
                    <div className="flex items-center text-blue-800 mb-1">
                      <Shield className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">Community Guidelines</span>
                    </div>
                    <p className="text-xs text-blue-700">
                      Be respectful and supportive. Do not share personally identifiable information. Posts containing
                      harassment, hate speech, or explicit content will be removed.
                    </p>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setShowPostForm(false)}>
                Cancel
              </Button>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={handleCreatePost}
                disabled={!postTitle.trim() || !postContent.trim()}
              >
                Submit Post
              </Button>
            </CardFooter>
          </Card>
        ) : null}

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="support" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-between items-center mb-6">
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="support" className="text-sm py-2">
                  <Users className="h-4 w-4 mr-2" />
                  Support
                </TabsTrigger>
                <TabsTrigger value="relationships" className="text-sm py-2">
                  <Heart className="h-4 w-4 mr-2" />
                  Relationships
                </TabsTrigger>
                <TabsTrigger value="health" className="text-sm py-2">
                  <Shield className="h-4 w-4 mr-2" />
                  Health
                </TabsTrigger>
                <TabsTrigger value="questions" className="text-sm py-2">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Q&A
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="mb-6">
              <Input placeholder="Search community posts..." className="max-w-md" />
            </div>

            <TabsContent value="support" className="mt-0">
              <CommunityFeed
                posts={[
                  {
                    id: 1,
                    title: "Finding courage to get tested after a risky encounter",
                    content:
                      "I recently had an encounter where protection failed, and I'm terrified about getting tested. I know I should, but the anxiety is overwhelming. Has anyone been through this and can share how they managed the fear?",
                    author: "Anonymous",
                    time: "2 hours ago",
                    likes: 24,
                    comments: 18,
                    views: 156,
                    tags: ["Testing", "Anxiety", "Support"],
                  },
                  {
                    id: 2,
                    title: "How to support a partner who just received a diagnosis",
                    content:
                      "My partner just found out they have an STI and they're devastated. I want to be supportive but I'm not sure what to say or do. Looking for advice from others who have been in this situation.",
                    author: "Anonymous",
                    time: "1 day ago",
                    likes: 42,
                    comments: 31,
                    views: 287,
                    tags: ["Relationships", "Support", "Diagnosis"],
                  },
                  {
                    id: 3,
                    title: "Success story: Overcoming shame after diagnosis",
                    content:
                      "A year ago, I was diagnosed with herpes and thought my life was over. I want to share my journey of acceptance and how I've moved forward. It gets better, and you are not defined by your status.",
                    author: "Anonymous",
                    time: "3 days ago",
                    likes: 89,
                    comments: 45,
                    views: 512,
                    tags: ["Success Story", "Acceptance", "Moving Forward"],
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="relationships" className="mt-0">
              <CommunityFeed
                posts={[
                  {
                    id: 4,
                    title: "Discussing sexual health with a new partner",
                    content:
                      "I've started dating someone new and want to have the sexual health conversation before we become intimate. How have others approached this topic in a way that's respectful but thorough?",
                    author: "Anonymous",
                    time: "5 hours ago",
                    likes: 31,
                    comments: 27,
                    views: 203,
                    tags: ["Communication", "New Relationships", "Disclosure"],
                  },
                  {
                    id: 5,
                    title: "Rebuilding intimacy after treatment",
                    content:
                      "My partner and I are trying to reconnect physically after completing treatment for an STI. It's been challenging to overcome the emotional impact. Looking for advice on rebuilding trust and comfort.",
                    author: "Anonymous",
                    time: "2 days ago",
                    likes: 38,
                    comments: 22,
                    views: 241,
                    tags: ["Intimacy", "Recovery", "Trust"],
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="health" className="mt-0">
              <CommunityFeed
                posts={[
                  {
                    id: 6,
                    title: "Unexpected side effects from medication",
                    content:
                      "I've been on treatment for an STI for a week and experiencing some side effects that weren't mentioned by my doctor. Has anyone else had similar experiences with this medication?",
                    author: "Anonymous",
                    time: "12 hours ago",
                    likes: 19,
                    comments: 24,
                    views: 187,
                    tags: ["Medication", "Side Effects", "Treatment"],
                  },
                  {
                    id: 7,
                    title: "Managing recurrent infections",
                    content:
                      "I've had three yeast infections in the past six months despite following all the prevention advice. Has anyone found effective strategies for preventing recurrence?",
                    author: "Anonymous",
                    time: "4 days ago",
                    likes: 52,
                    comments: 38,
                    views: 329,
                    tags: ["Recurring Issues", "Prevention", "Management"],
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="questions" className="mt-0">
              <CommunityFeed
                posts={[
                  {
                    id: 8,
                    title: "How accurate are at-home testing kits?",
                    content:
                      "I'm considering using an at-home STI testing kit but I'm unsure about their reliability. Has anyone used these kits and how do they compare to getting tested at a clinic?",
                    author: "Anonymous",
                    time: "1 day ago",
                    likes: 27,
                    comments: 19,
                    views: 215,
                    tags: ["Testing", "At-Home Kits", "Accuracy"],
                  },
                  {
                    id: 9,
                    title: "Understanding test results terminology",
                    content:
                      "I received my test results and there are terms I don't understand. What's the difference between 'reactive' and 'positive'? And what does 'indeterminate' mean?",
                    author: "Anonymous",
                    time: "3 days ago",
                    likes: 34,
                    comments: 29,
                    views: 267,
                    tags: ["Test Results", "Terminology", "Understanding"],
                  },
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>

        <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-emerald-600" />
                Community Safety
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">AI-Powered Moderation</span>
                    <p className="text-sm text-gray-600 mt-1">
                      All posts are automatically screened for harmful content before appearing in the community.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Expert Oversight</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Healthcare professionals review discussions and provide accurate information when needed.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Complete Anonymity</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Your identity is never revealed, even to moderators. Post with confidence.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-emerald-600" />
                Join the Conversation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Our community is a safe space to share experiences, ask questions, and find support from others who
                understand what you're going through.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <MessageSquare className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Start a Discussion</h3>
                    <p className="text-sm text-gray-600">Share your experiences or ask questions</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <Heart className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Support Others</h3>
                    <p className="text-sm text-gray-600">Offer encouragement and share insights</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <Lock className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Private Groups</h3>
                    <p className="text-sm text-gray-600">Join condition-specific support groups</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function CommunityFeed({ posts }) {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.id} className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="flex items-center mt-1">
                  <Avatar className="h-5 w-5 mr-2">
                    <AvatarFallback className="text-xs bg-gray-200">{post.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {post.author} • {post.time}
                </CardDescription>
              </div>
              <div className="flex space-x-1">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{post.content}</p>
          </CardContent>
          <CardFooter className="pt-0 flex justify-between">
            <div className="flex space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{post.views}</span>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              View Discussion
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
