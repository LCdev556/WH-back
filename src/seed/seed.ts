import { connect, disconnect } from 'mongoose';
import { Employee, EmployeeSchema } from '../employees/schema/employee.schema';
import * as mongoose from 'mongoose';

// Connexion à la base de données
async function seed() {
  await connect('mongodb://localhost:27017/wh-employees');

  const EmployeeModel = mongoose.model('Employee', EmployeeSchema);

  // Jeu de données
  const employees = [
    { firstName: 'Alice', lastName: 'Martin', startDate: new Date('2023-01-15'), department: 'Marketing', dateOfBirth: new Date('1990-05-10'), street: '12 Rue Lafayette', city: 'Paris', state: 'IDF', zipCode: '75009' },
    { firstName: 'Bob', lastName: 'Dupont', startDate: new Date('2022-10-23'), department: 'Sales', dateOfBirth: new Date('1985-07-24'), street: '45 Boulevard Haussmann', city: 'Paris', state: 'IDF', zipCode: '75009' },
    { firstName: 'Claire', lastName: 'Durand', startDate: new Date('2021-06-30'), department: 'HR', dateOfBirth: new Date('1992-12-03'), street: '8 Rue Oberkampf', city: 'Paris', state: 'IDF', zipCode: '75011' },
    { firstName: 'David', lastName: 'Moreau', startDate: new Date('2020-03-17'), department: 'IT', dateOfBirth: new Date('1989-09-11'), street: '19 Rue Cler', city: 'Paris', state: 'IDF', zipCode: '75007' },
    { firstName: 'Emma', lastName: 'Lopez', startDate: new Date('2023-04-05'), department: 'Finance', dateOfBirth: new Date('1995-02-14'), street: '30 Avenue Mozart', city: 'Paris', state: 'IDF', zipCode: '75016' },
    { firstName: 'Fabien', lastName: 'Girard', startDate: new Date('2019-11-20'), department: 'Marketing', dateOfBirth: new Date('1987-08-30'), street: '67 Rue de Rivoli', city: 'Paris', state: 'IDF', zipCode: '75001' },
    { firstName: 'Gaëlle', lastName: 'Petit', startDate: new Date('2021-02-12'), department: 'Sales', dateOfBirth: new Date('1991-06-22'), street: '23 Rue de Rennes', city: 'Paris', state: 'IDF', zipCode: '75006' },
    { firstName: 'Hugo', lastName: 'Carpentier', startDate: new Date('2022-08-09'), department: 'IT', dateOfBirth: new Date('1993-04-08'), street: '5 Rue Mouffetard', city: 'Paris', state: 'IDF', zipCode: '75005' },
    { firstName: 'Isabelle', lastName: 'Bernard', startDate: new Date('2020-09-29'), department: 'Finance', dateOfBirth: new Date('1984-10-12'), street: '11 Avenue de Clichy', city: 'Paris', state: 'IDF', zipCode: '75017' },
    { firstName: 'Jules', lastName: 'Leclerc', startDate: new Date('2023-05-15'), department: 'HR', dateOfBirth: new Date('1996-01-19'), street: '21 Rue Saint-Antoine', city: 'Paris', state: 'IDF', zipCode: '75004' },
    { firstName: 'Karine', lastName: 'Perrot', startDate: new Date('2018-12-01'), department: 'Sales', dateOfBirth: new Date('1982-03-05'), street: '3 Rue Saint-Denis', city: 'Paris', state: 'IDF', zipCode: '75002' },
    { firstName: 'Laurent', lastName: 'Barbier', startDate: new Date('2022-01-25'), department: 'Marketing', dateOfBirth: new Date('1990-11-07'), street: '90 Rue de la Pompe', city: 'Paris', state: 'IDF', zipCode: '75016' },
    { firstName: 'Manon', lastName: 'Guichard', startDate: new Date('2021-11-11'), department: 'Finance', dateOfBirth: new Date('1992-09-30'), street: '12 Rue du Faubourg', city: 'Paris', state: 'IDF', zipCode: '75010' },
    { firstName: 'Nathan', lastName: 'Chevalier', startDate: new Date('2020-07-07'), department: 'IT', dateOfBirth: new Date('1988-05-23'), street: '14 Rue Lamarck', city: 'Paris', state: 'IDF', zipCode: '75018' },
    { firstName: 'Océane', lastName: 'Marchand', startDate: new Date('2023-03-03'), department: 'HR', dateOfBirth: new Date('1997-07-18'), street: '7 Rue de la Roquette', city: 'Paris', state: 'IDF', zipCode: '75011' },
  ];

  // Insertion des données
  await EmployeeModel.insertMany(employees);

  console.log('✔️ Base peuplée avec succès ✅');
  await disconnect();
}

seed();