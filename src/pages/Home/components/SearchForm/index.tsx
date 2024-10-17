import { SearchFormContainer, SearchFormContent } from "./styles"

export function SearchForm(){
  return(
    <SearchFormContainer>
      <SearchFormContent>
        <div>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </div>

        <form>
          <input type="text" placeholder="Buscar conteúdo"/>
        </form>
      </SearchFormContent>
    </SearchFormContainer>
  )
}