import Project from "../components/Project";

export default function PortfolioPage() {
  return (
    <div>
      <h1>Welcome to the Portfolio Page</h1>
      <p>
        This is the home page. You can use the navigation bar to visit the other
        pages.
      </p>
      <div class="row">
        <Project imageURL="/src/assets/react.svg" projectName="Project 1" projectURL="" projectDescription=""/>
        <Project imageURL="/src/assets/react.svg" projectName="Project 1" projectURL="" projectDescription=""/>
        <Project imageURL="/src/assets/react.svg" projectName="Project 1" projectURL="" projectDescription=""/>
        <Project imageURL="/src/assets/react.svg" projectName="Project 1" projectURL="" projectDescription=""/>
        <Project imageURL="/src/assets/react.svg" projectName="Project 1" projectURL="" projectDescription=""/>
        <Project imageURL="/src/assets/react.svg" projectName="Project 1" projectURL="" projectDescription=""/>
      </div>
    </div>
  );
}
