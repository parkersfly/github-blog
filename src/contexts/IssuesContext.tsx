import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Issue {
  id: number
  number: number
  title: string
  body: string
  created_at: string
  comments: number
}

interface IssueSelected {
  title: string
  comments: number
  html_url: string
  created_at: string | Date
  user: {
    login: string
  }
}

interface IssuesContextType {
  issues: Issue[]
  issueSelected: {}
  fetchIssues: (query?: string) => Promise<void>
  handleFetchIssueSelected: (issueNumber: number) => void
}

interface IssuesProviderProps {
  children: ReactNode
}

const IssuesContext = createContext({} as IssuesContextType)

function IssuesProvider({children}: IssuesProviderProps){
  const [issues, setIssues] = useState<Issue[]>([])
  const [issueSelected, setIssueSelected] = useState<IssueSelected>({
    title: "",
    comments: 0,
    html_url: "",
    created_at: new Date(),
    user: {
      login: "",
    },
  })

  async function fetchIssues(query?: string) {
      const response = await api.get("/search/issues", {
        params: {
          q: query ? `${query} repo:parkersfly/github-blog` : `repo:parkersfly/github-blog`,
          sort: 'created',
          order: 'desc',
        }
      })

    setIssues(response.data.items)
  }

  async function handleFetchIssueSelected(issueNumber: number){
    const response = await api.get(`repos/parkersfly/github-blog/issues/${issueNumber}`)

    setIssueSelected(response.data)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{
      issues,
      issueSelected,
      fetchIssues,
      handleFetchIssueSelected
    }}>
      {children}
    </IssuesContext.Provider>
  )
}

function useIssue() {
  const context = useContext(IssuesContext)

  return context
}

export {
  useIssue,
  IssuesProvider
}