/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import {People} from "./people";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

function buscaSilva (people: People){
	return people.getNome().indexOf("Silva");
}

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
	
	let peopleUbuntu:{people: People}[] = [
		{"people": new People("Daniel Moraes",32,96.50,1.79, true)},
		{"people": new People("Samuel Silva",5,96.50,1.79, false)}
	]

	//R01
	var filtroSumarizarIdades = peopleUbuntu.filter(idades => (idades.people.getIdade()));
	var idades = 0;
	for(var idade of filtroSumarizarIdades){		
		idades = idades > 0 ? idade.people.getIdade() + idades : idade.people.getIdade();
 	}
	console.log("Sumarizando Idades: " + idades);

	//R02
	var filtroAgruparNomes = peopleUbuntu.filter(nomes => (nomes.people.getNome()));
	var nomes = "";
	for(var nome of filtroAgruparNomes){		
		nomes = nomes.length > 0 ? nome.people.getNome() + " " + nomes : nome.people.getNome();
 	}
	console.log("Agrupamento de nomes: " + nomes);


	//R04
	var filtroEhDev = peopleUbuntu.filter(nomes => (nomes.people.getEhDev()));
	console.log("Sao DEV: " + filtroEhDev.length);

	//R05
	var filtroSobreNome = peopleUbuntu.filter(sobrenomeSilva => (sobrenomeSilva.people.getNome().indexOf("Silva") != -1));
	var sobrenomeSilva = "";
	for(var nome of filtroSobreNome){		
		sobrenomeSilva = sobrenomeSilva.length > 0 ? nome.people.getNome() + " " + nomes : nome.people.getNome();
 	}
	console.log("Sobrenome Silva: " + sobrenomeSilva);
	
});
