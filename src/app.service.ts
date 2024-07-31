import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './models/cliente';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  public async listarTodos(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  public async buscarPorId(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOneBy({ id });
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }

    return cliente;
  }

  public async salvar(cliente: Cliente): Promise<Cliente> {
    const novoCliente = await this.clienteRepository.save(cliente);
    return novoCliente;
  }

  public async atualizar(id: number, cliente: Cliente): Promise<Cliente> {
    const editCliente = await this.clienteRepository.findOneBy({ id });
    if (!editCliente) {
      throw new NotFoundException('Cliente não encontrado');
    }

    editCliente.nome = cliente.nome;
    editCliente.email = cliente.email;
    editCliente.ano = cliente.ano;

    await this.clienteRepository.save(editCliente);

    return editCliente;
  }

  public async excluir(id: number): Promise<void> {
    await this.clienteRepository.delete({ id });
  }
}
