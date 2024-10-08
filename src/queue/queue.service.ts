import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class QueueService {
    constructor(@InjectQueue('mi-cola') private queue: Queue) { }

    async addToQueue(data: any) {
        await this.queue.add('mi-trabajo', data, {
            attempts: 3,
            backoff: 5000, // Reintentos con intervalo de 5 segundos
        });
    }
}
