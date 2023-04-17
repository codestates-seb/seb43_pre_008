import { Link } from "react-router-dom";
import { ReactComponent as QuestionIcon } from "../img/questionIcon.svg";
import { ReactComponent as InfoIcon } from "../img/infoIcon.svg";
import { ReactComponent as CollectiveIcon } from "../img/collectiveIcon.svg";
import { ReactComponent as Team1 } from "../img/team1.svg";
import { ReactComponent as Team2 } from "../img/team2.svg";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
export const NavbarWrapper = styled.nav`
  height: 100%;
  border-right: 1px solid #d7d9dd;
`;
/**2023-04-18 이진하 */
export const MobileNavbar = styled.div`
  position: fixed;
  top: 53px;
  left: 0;
  width: 240px;
  padding-top: 24px;
  padding-bottom: 8px;
  border-right: 1px solid #d7d9dd;
  border-bottom: 1px solid #d7d9dd;
  background-color: #ffffff;
`;

export const NavbarBlock = styled.div`
  position: sticky;
  top: 53px;
  width: 164px;
  padding-top: 24px;
  margin-bottom: 8px;
  background-color: #ffffff;
`;

export const NavTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 8px 4px 8px;
  h2 {
    font-size: 11px;
    font-weight: 400;
    color: #6a737c;
    text-transform: uppercase;
  }
  svg {
    fill: #6b737c;
  }
`;

export const NavPrimary = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 34px;
  padding: 4px 4px 4px 8px;
  font-size: 13px;
  font-weight: 400;
  color: #525960;
  cursor: pointer;
  &:hover {
    color: #0c0d0e;
    .home,
    .collective,
    .team {
      color: #0c0d0e;
    }
    .question {
      fill: #0c0d0e;
    }
  }
  ${(props) =>
    props.selected &&
    css`
      border-right: 3px solid #f48123;
      font-weight: 700;
      color: #0c0d0e;
      background-color: #f0f2f4;
      .home,
      .collective,
      .team {
        font-weight: 700;
        color: #0c0d0e;
      }
      .question {
        fill: #0c0d0e;
      }
    `}
`;

export const NavPublic = styled(NavPrimary)`
  width: 100%;
  padding-left: 30px;
`;

export const NavQuestion = styled(NavPrimary)`
  width: 100%;
  padding: 8px 6px 8px 6px;
  svg {
    fill: #848c95;
    margin-right: 4px;
    margin-top: -4px;
  }
`;

export const NavEtc = styled(NavQuestion)`
  svg {
    fill: #f48123;
  }
  a {
    display: block;
    font-size: 13px;
    font-weight: 400;
    color: #525960;
  }
`;

export const NavTeams = styled(NavEtc)`
  svg {
    fill: #ffffff;
  }
`;

export const TeamsIcon = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background-color: #f48123;
  margin-top: -4px;
  margin-right: 4px;
  .bag {
    position: absolute;
    top: 1px;
    left: 1px;
    margin-top: 0;
  }
  .key {
    position: absolute;
    right: -6px;
    bottom: -3px;
    path:last-child {
      fill: #6b737c;
    }
  }
`;

const Nav = () => {
  const activeTab = useSelector((state) => state.activeTab);
  const dispatch = useDispatch();

  return (
    <NavbarWrapper>
      <NavbarBlock>
        <ol>
          <li aria-label="Go to Home page">
            <Link
              to="/"
              onClick={() => dispatch({ type: "ACTIVETAB", value: 0 })}
            >
              <NavPrimary selected={activeTab === 0} className="home">
                Home
              </NavPrimary>
            </Link>
          </li>
          <li>
            <NavTitle>
              <h2>Public</h2>
            </NavTitle>
            <ol>
              <li aria-label="Go to Questions page">
                <Link
                  to="/questions"
                  onClick={() => dispatch({ type: "ACTIVETAB", value: 1 })}
                >
                  <NavQuestion selected={activeTab === 1}>
                    <QuestionIcon className="question" />
                    <span>Questions</span>
                  </NavQuestion>
                </Link>
              </li>
              <li aria-label="Go to Tags page">
                <Link
                  to="/tags"
                  onClick={() => dispatch({ type: "ACTIVETAB", value: 2 })}
                >
                  <NavPublic selected={activeTab === 2}>Tags</NavPublic>
                </Link>
              </li>
              <li aria-label="Go to Users page">
                <Link
                  to="/users"
                  onClick={() => dispatch({ type: "ACTIVETAB", value: 3 })}
                >
                  <NavPublic selected={activeTab === 3}>Users</NavPublic>
                </Link>
              </li>
              <li aria-label="Go to Companies">
                <Link
                  to="/jobs/Companies"
                  onClick={() => dispatch({ type: "ACTIVETAB", value: 4 })}
                >
                  <NavPublic selected={activeTab === 4}>Companies</NavPublic>
                </Link>
              </li>
            </ol>
          </li>
          <li>
            <NavTitle>
              <h2>Collectives</h2>
              <InfoIcon />
            </NavTitle>
            <NavEtc selected={activeTab === 5}>
              <CollectiveIcon />
              <Link
                to="/collectives"
                className="collective"
                onClick={() => dispatch({ type: "ACTIVETAB", value: 5 })}
              >
                Explore Collectives
              </Link>
            </NavEtc>
          </li>
          <li>
            <NavTitle>
              <h2>Teams</h2>
              <InfoIcon />
            </NavTitle>
            <NavTeams>
              <TeamsIcon>
                <Team1 className="bag" />
                <Team2 className="key" />
              </TeamsIcon>
              <a
                className="team"
                href="https://stackoverflowteams.com/teams/create/free?utm_source=so-owned&utm_medium=side-bar&utm_campaign=campaign-38&utm_content=cta"
              >
                Create free Team
              </a>
            </NavTeams>
          </li>
        </ol>
      </NavbarBlock>
    </NavbarWrapper>
  );
};

export default Nav;
