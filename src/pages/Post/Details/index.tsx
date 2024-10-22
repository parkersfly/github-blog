import { DetailsContainer, DetailsLinks } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useIssue } from "../../../contexts/IssuesContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Details() {
  const { issueSelected, handleFetchIssueSelected } = useIssue()
  
  const params = useParams()

  const formattedDate = formatDistanceToNow(issueSelected.created_at, { addSuffix: true, locale: ptBR })

  useEffect(() => {
    handleFetchIssueSelected(Number(params.issue_number))
  }, [])

  return (
    <DetailsContainer>
      <header>
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </a>

        <a href={issueSelected.html_url}>
          VER NO GITHUB 
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>

      <h1>{issueSelected.title}</h1>

      <DetailsLinks>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{issueSelected.user.login}</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>{formattedDate}</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faComment} />
              <span>{issueSelected.comments} comentários</span>
            </div>
          </DetailsLinks>
    </DetailsContainer>
  )
}