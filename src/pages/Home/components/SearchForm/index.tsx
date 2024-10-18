import { SearchFormContainer, SearchFormContent } from "./styles"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../../../lib/axios"
import { useForm } from "react-hook-form"
import * as z from 'zod'

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm(){
  
  // const publicationsNumber = issues.total_count

  const {
    register,
    handleSubmit,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })


  async function handleSearchIssues(search: SearchFormInputs){
    const response = await api.get(`search/issues?q=${search.query}%20repo:parkersfly/github-blog`)

    console.log(response.data)
  }

  return(
    <SearchFormContainer>
      <SearchFormContent>
        <div>
          <strong>Publicações</strong>
          <span>0 publicações</span>
        </div>

        <form onSubmit={handleSubmit(handleSearchIssues)}>
          <input type="text" placeholder="Buscar conteúdo" {...register("query")}/>
        </form>
      </SearchFormContent>
    </SearchFormContainer>
  )
}