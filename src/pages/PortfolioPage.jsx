import Project from "../components/Project";

export default function PortfolioPage() {
  return (
    <div>
      <h3>My Portfolio</h3>
      <p>
        View applications that I have developed.
      </p>
      <div class="row">
        <Project imageURL="../assets/Brewery_Finder.png" projectName="Brewery Finder" projectURL="https://bsaglimb.github.io/BreweryFinder/" projectDescription="Find local breweries"/>
        <Project imageURL="../assets/Employee_Tracker.png" projectName="Employee Tracker" projectURL="https://github.com/RJLennon/Challenge12" projectDescription="Employee database management system"/>
        <Project imageURL="/src/assets/Note_Taker.png" projectName="Note Taker" projectURL="https://rjl-note-taker-5aad7aec2cdc.herokuapp.com/" projectDescription="Note taking application"/>
        <Project imageURL="/src/assets/PersonaPal.png" projectName="PersonaPal" projectURL="https://github.com/RJLennon/PersonaPals" projectDescription="AI powered penpal"/>
        <Project imageURL="/src/assets/Password_Generator.png" projectName="Password Generator" projectURL="https://rjlennon.github.io/Challenge3/" projectDescription="Generate a random password"/>
        <Project imageURL="/src/assets/Workday_Scheduler.png" projectName="Workday Scheduler" projectURL="https://rjlennon.github.io/Challenge5/" projectDescription="Schedule your work day"/>
      </div>
    </div>
  );
}
