import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data to be sorted
      data: [
        { id: 1, name: "Maria Morones", 
        department: "Management", 
        role: "CEO" 
      },
        {
          id: 2,
          name: "Daniele Abernethy",
          department: "Management",
          role: "Vice Presedent"
        },
        {
          id: 3,
          name: "Joseph Babb",
          department: "Management",
          role: "Office Manager"
        },
        {
          id: 4,
          name: "Sammy Smith",
          department: "Management",
          role: "Administrator"
        },
        { id: 5, name: "Priscila Elms", 
        department: "IT", 
        role: "DBA" 
      },
        {
          id: 6,
          name: "Maximo Lacomb",
          department: "IT",
          role: "Software Developer"
        },
        {
          id: 7,
          name: "Michael Paulson",
          department: "IT",
          role: "Web Developer"
        },
        { id: 8, name: "Joe Green", 
        department: "IT", 
        role: "Manager" 
      },
        {
          id: 9,
          name: "Andy Shawver",
          department: "Sales",
          role: "Salesperson"
        },
        {
          id: 10,
          name: "Hugo Bellamy",
          department: "Sales",
          role: "Salesperson"
        },
        { id: 11, name: "Mallie Rozell", 
        department: "Sales", 
        role: "Manager" 
      },
        { id: 12, name: "Hans Gruber", 
        department: "Sales", 
        role: "Clerk" },
        {
          id: 13,
          name: "Dario Boyland",
          department: "Accounting",
          role: "CPA"
        },
        {
          id: 14,
          name: "Lisa Simpson",
          department: "Accounting",
          role: "Accountant"
        },
        {
          id: 15,
          name: "Joe Crook",
          department: "Accounting",
          role: "supervisor"
        }
      ],
      // search 
      search: ""
    };
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  // Handles user input limit to 20 characters
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0.2) });
  }

  compareBy(key) {
    return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  // sort done here 

  sortBy(key) {
    console.log(key);
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ data: arrayCopy });
  }

  render() {
  
    let filteredNames = this.state.data.filter(data => {
      return (
        data.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    // added filteredNames from above to the data map
    const rows = filteredNames.map(rowData => <Row {...rowData} />);

    return (
      <Container style={{ minHeight: "80%" }}>
        {/* onChange calls the updateSearch function  */}
        <div className="text-center mt-3 mb-3 font-weight-bold">
          Search Employee Name: &nbsp;
          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
        </div>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col" onClick={() => this.sortBy("id")}>
                ID
              </th>
              <th scope="col" onClick={() => this.sortBy("name")}>
                Name
              </th>
              <th scope="col" onClick={() => this.sortBy("department")}>
                Department
              </th>
              <th scope="col" onClick={() => this.sortBy("role")}>
                Role
              </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </Container>
    );
  }
}

export default Table;
