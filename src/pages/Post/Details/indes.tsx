import { DetailsContainer, DetailsLinks } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Details() {
  return (
    <DetailsContainer>
      <header>
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </a>

        <a href="#">
          VER NO GITHUB 
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>

      <h1>JavaScript data types and data structures</h1>

      <DetailsLinks>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>cameronwll</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>Há 1 dia</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faComment} />
              <span>5 comentários</span>
            </div>
          </DetailsLinks>
    </DetailsContainer>
  )
}