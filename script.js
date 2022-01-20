class House {
  constructor(type, area, condition) {
    this.type = type;
    this.area = area;
    this.condition = condition;

    this.houseType = document.createElement("p");
    this.houseTypeText = document.createTextNode(`Tipo do Imóvel: ${type}`);
    this.houseType.appendChild(this.houseTypeText);

    this.houseArea = document.createElement("p");
    this.houseAreaText = document.createTextNode(
      `Área do Imóvel: ${this.area}m²`
    );
    this.houseArea.appendChild(this.houseAreaText);

    this.houseCondition = document.createElement("p");
    this.houseConditionText = document.createTextNode(
      `Situação do Imóvel: ${this.condition}`
    );
    this.houseCondition.appendChild(this.houseConditionText);

    this.deleteButton = document.createElement("button");
    this.deleteButton.setAttribute("type", "button");
    this.deleteButton.setAttribute("onclick", "deleteHouse(this)");
    this.deleteButton.textContent = "excluir";
  }

  buildHouse() {
    this.houseDiv = document.createElement("div");
    this.houseDiv.appendChild(this.houseType);
    this.houseDiv.appendChild(this.houseArea);
    this.houseDiv.appendChild(this.houseCondition);

    if (this.condition == "Alugado")
      this.houseDiv.setAttribute("class", "imovel-situation-rented");

    this.houseLi = document.createElement("li");
    this.houseLi.setAttribute("class", "house");
    this.houseLi.appendChild(this.houseDiv);
    this.houseLi.appendChild(this.deleteButton);

    this.addHouseToList();
    clearForm();
  }

  addHouseToList() {
    let houseList = document.getElementById("house-list");
    houseList.appendChild(this.houseLi);
  }

  removeHouse(element) {
    element.parentNode.remove();
  }
}

function deleteHouse(element) {
  let house = new House();
  house.removeHouse(element);
}

function addHouse() {
  let type = document.querySelector("select[name='imovel-type").value;
  let area = document.querySelector("input[name='imovel-area").value;
  let condition = document.querySelector("select[name='imovel-situation").value;

  if (isFilled(type, area, condition)) {
    let house = new House(type, area, condition);
    house.buildHouse();
  }
}

function isFilled(type, area, condition) {
  if (type !== "" && area !== "" && condition !== "") return true;
  return false;
}

function clearForm() {
  document.querySelector("form").reset();
}
