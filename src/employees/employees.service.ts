import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './schema/employee.schema';

/**
 * Service de gestion des employés.
 * Fournit les méthodes CRUD pour manipuler les employés en base.
 */
@Injectable()
export class EmployeesService {
  constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) {}

  /**
   * Récupère tous les employés.
   * @returns {Promise<Employee[]>} Liste des employés.
   */
  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  /**
   * Récupère un employé par son ID.
   * @param {string} id - ID de l'employé.
   * @returns {Promise<Employee>} L'employé trouvé.
   * @throws {NotFoundException} Si aucun employé n'est trouvé.
   */
  async findOne(id: string): Promise<Employee> {
    const employee = await this.employeeModel.findById(id).exec();
    if (!employee) {
      throw new NotFoundException(`Employé avec l'ID ${id} non trouvé.`);
    }
    return employee;
  }

  /**
   * Crée un nouvel employé.
   * @param {Employee} employee - Données de l'employé.
   * @returns {Promise<Employee>} L'employé créé.
   */
  async create(employee: Employee): Promise<Employee> {
    const newEmployee = new this.employeeModel(employee);
    return newEmployee.save();
  }

  /**
   * Met à jour un employé existant.
   * @param {string} id - ID de l'employé.
   * @param {Employee} employee - Nouvelles données.
   * @returns {Promise<Employee>} L'employé mis à jour.
   * @throws {NotFoundException} Si aucun employé n'est trouvé.
   */
  async update(id: string, employee: Employee): Promise<Employee> {
    const updatedEmployee = await this.employeeModel.findByIdAndUpdate(id, employee, { new: true }).exec();
    if (!updatedEmployee) {
      throw new NotFoundException(`Employé avec l'ID ${id} non trouvé.`);
    }
    return updatedEmployee;
  }

  /**
   * Supprime un employé par son ID.
   * @param {string} id - ID de l'employé.
   * @returns {Promise<Employee>} L'employé supprimé.
   * @throws {NotFoundException} Si aucun employé n'est trouvé.
   */
  async delete(id: string): Promise<Employee> {
    const deletedEmployee = await this.employeeModel.findByIdAndDelete(id).exec();
    if (!deletedEmployee) {
      throw new NotFoundException(`Employé avec l'ID ${id} non trouvé.`);
    }
    return deletedEmployee;
  }
}