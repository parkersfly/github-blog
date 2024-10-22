import { SearchFormContainer, SearchFormContent } from "./styles"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { useIssue } from "../../../../contexts/IssuesContext"

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm(){

  const { issues, fetchIssues } = useIssue()
  
  const countPublishedIssues = issues.length

  const {
    register,
    handleSubmit,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })


  async function handleSearchIssues(data: SearchFormInputs){
    await fetchIssues(data.query)
  }

  return(
    <SearchFormContainer>
      <SearchFormContent>
        <div>
          <strong>Publicações</strong>

          <span>
            {countPublishedIssues}
            {countPublishedIssues === 1 ? " publicação" : " publicações"}
          </span>
        </div>

        <form onSubmit={handleSubmit(handleSearchIssues)}>
          <input type="text" placeholder="Buscar conteúdo" {...register("query")}/>
        </form>
      </SearchFormContent>
    </SearchFormContainer>
  )
}