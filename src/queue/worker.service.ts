import { Injectable } from '@nestjs/common';
import { Worker, Job } from 'bullmq';

@Injectable()
export class WorkerService {
    constructor() {
        new Worker(
            'mi-cola',
            async (job: Job) => {
                console.log('Procesando trabajo:', job.data);
                // Lógica para procesar el trabajo
                return 'Trabajo completado';
            },
            {
                connection: {
                    host: 'localhost',
                    port: 6379,
                },
            },
        );
    }
}
