import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import {PrismaClient} from '@Prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{

  constructor(){
    super({
      log:["warn", "error"]
    })
  }

  onModuleInit() {
    return this.$connect()
  }
  onModuleDestroy() {
    return this.$disconnect()
  }
}