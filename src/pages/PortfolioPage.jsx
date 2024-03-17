import Project from "../components/Project";
import BreweryFinder from "../assets/Brewery_Finder.png";
import EmployeeTracker from "../assets/Employee_Tracker.png";
import NoteTaker from "../assets/Note_Taker.png";
import PersonaPal from "../assets/PersonaPal.png";
import PasswordGenerator from "../assets/Password_Generator.png";
import WorkdayScheduler from "../assets/Workday_Scheduler.png";

export default function PortfolioPage() {
  return (
    <div>
      <h3>My Portfolio</h3>
      <p>
        View applications that I have developed.
      </p>
      <div class="row">
        <Project imageURL={BreweryFinder} projectName="Brewery Finder" projectURL="https://bsaglimb.github.io/BreweryFinder/" projectDescription="Find local breweries"/>
        <Project imageURL={EmployeeTracker} projectName="Employee Tracker" projectURL="https://github.com/RJLennon/Challenge12" projectDescription="Employee database management system"/>
        <Project imageURL={NoteTaker} projectName="Note Taker" projectURL="https://rjl-note-taker-5aad7aec2cdc.herokuapp.com/" projectDescription="Note taking application"/>
        <Project imageURL={PersonaPal} projectName="PersonaPal" projectURL="https://github.com/RJLennon/PersonaPals" projectDescription="AI powered penpal"/>
        <Project imageURL={PasswordGenerator} projectName="Password Generator" projectURL="https://rjlennon.github.io/Challenge3/" projectDescription="Generate a random password"/>
        <Project imageURL={WorkdayScheduler} projectName="Workday Scheduler" projectURL="https://rjlennon.github.io/Challenge5/" projectDescription="Schedule your work day"/>
      </div>
    </div>
  );
}
