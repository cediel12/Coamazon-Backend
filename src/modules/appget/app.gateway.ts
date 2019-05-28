import { Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Client, Server } from 'socket.io';

@WebSocketGateway(4001)
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect{
  @WebSocketServer()
  server: Server;

  private logger = new Logger('AppGateway');

  handleConnection(client){
    this.logger.log('New client connected');
      client.emit('connection','Successfully connected to server')
  }

  handleDisconnect(client) {
    this.logger.log('Client disconnected');
  }
  
}