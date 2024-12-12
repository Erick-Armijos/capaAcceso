import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';


@Injectable()
export class DatabaseService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy
{
    constructor() {
        super({
            log: [
                { level: 'query', emit: 'event' }, // Log de consultas
                { level: 'info', emit: 'event' }, // Información general
                { level: 'warn', emit: 'stdout' }, // Advertencias
                { level: 'error', emit: 'stdout' }, // Errores
            ],
        });

        
    }

    async onModuleInit() {
        await this.$connect();
        /*this.$on('query' as never, (event: PrismaQueryEvent) => {
            console.log('Query: ' + event.query);
            console.log('Params: ' + event.params);
            console.log('Duration: ' + event.duration + 'ms');
        });*/
        
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}

interface PrismaQueryEvent {
  query: string;
  params: string;
  duration: number;
  target: string;
}