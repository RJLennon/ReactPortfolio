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
        <Project imageURL="/src/assets/Brewery_Finder.png" projectName="Brewery Finder" projectURL="https://bsaglimb.github.io/BreweryFinder/" projectDescription=""/>
        <Project imageURL="/src/assets/Employee_Tracker.png" projectName="Employee Tracker" projectURL="https://github.com/RJLennon/Challenge12" projectDescription=""/>
        <Project imageURL="/src/assets/Note_Taker.png" projectName="Note Taker" projectURL="https://rjl-note-taker-5aad7aec2cdc.herokuapp.com/" projectDescription=""/>
        <Project imageURL="/src/assets/PersonaPal.png" projectName="PersonaPal" projectURL="https://github.com/RJLennon/PersonaPals" projectDescription=""/>
        <Project imageURL="/src/assets/Password_Generator.png" projectName="Password Generator" projectURL="https://rjlennon.github.io/Challenge3/" projectDescription=""/>
        <Project imageURL="/src/assets/Workday_Scheduler.png" projectName="Workday Scheduler" projectURL="https://rjlennon.github.io/Challenge5/" projectDescription=""/>
      </div>
    </div>
  );
}
