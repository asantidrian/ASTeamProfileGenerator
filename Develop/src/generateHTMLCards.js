
//template for the employee html cards
const teamCards = (employee) => {
  return `
 
          <div class="card shadow rounded">
            <div class="card-header text-light bg-primary ">
              <h3>${employee.getName()}</h3>
              <h4><i class="${employee.getEmployeeIcon(employee.getRole())}" style='color: white'></i>${employee.getRole()}</h4>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}" >${employee.getEmail()}</a></li>
                <li class="list-group-item">${employee.getEmployeeInfo()}: ${employee.getEmployeeData()}</li>
              </ul> 
            </div>
          </div>
      `;
}


module.exports = teamCards;

