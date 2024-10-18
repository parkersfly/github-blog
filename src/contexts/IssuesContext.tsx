import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Issue {
  id: number
  title: string
  body: string
  created_at: string
  comments: number
}

interface IssuesContextType {
  issues: Issue[]
}

const IssuesContext = createContext({} as IssuesContextType)

interface IssuesProviderProps {
  children: ReactNode
}

function IssuesProvider({children}: IssuesProviderProps){
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    const fetchIssues = async () => {
      const response = await api.get("repos/parkersfly/github-blog/issues")

      console.log(response.data)
      setIssues(response.data)
    }

    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{
      issues
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