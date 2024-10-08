import { Controller, Post, Body } from '@nestjs/common';
import { QueueService } from './queue.service';

@Controller('queue')
export class QueueController {
    constructor(private readonly queueService: QueueService) { }

    @Post('enqueue')
    async enqueue(@Body() data: any) {
        await this.queueService.addToQueue(data);
        return { message: 'Trabajo encolado con éxito' };
    }
}
