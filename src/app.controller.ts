import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Cliente } from './models/cliente';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //Exemplo: http://localhost:3000/
  getStatus(): string {
    return 'Node está rodando: ' + new Date();
  }

  @Get('/clientes') //Exemplo: http://localhost:3000/clientes
  listarTodosClientes(): Promise<Cliente[]> {
    console.log('Entrou método listarTodosClientes ' + new Date());
    return this.appService.listarTodos();
  }

  @Get('/cliente') //Exemplo: http://localhost:3000?id=1
  public buscarPorId(@Query('id') id: number) {
    console.log('Entrou método buscarPorId ' + new Date());
    return this.appService.buscarPorId(id);
  }

  @Post() //Exemplo: http://localhost:3000/
  public salvar(@Body() cliente: Cliente) {
    console.log('Entrou método salvar ' + new Date());
    return this.appService.salvar(cliente);
  }

  @Put(':id') //Exemplo: http://localhost:3000/1
  public alterar(@Param('id') id: number, @Body() cliente: Cliente) {
    console.log('Entrou método atualizar ' + new Date());
    return this.appService.atualizar(id, cliente);
  }

  @Delete(':id') //Exemplo: http://localhost:3000/1
  public excluir(@Param('id') id: number) {
    console.log('Entrou método excluir ' + new Date());
    return this.appService.excluir(id);
  }
}
