import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { QueueService } from './queue.service';
import { WorkerService } from './worker.service';
import { QueueController } from './queue.controller';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'mi-cola', // Nombre de la cola
    }),
  ],
  providers: [QueueService, WorkerService],
  controllers: [QueueController],
})
export class QueueModule { }
