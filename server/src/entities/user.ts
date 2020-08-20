import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  BaseEntity,
} from "typeorm";
import { Station } from "./station";

@Index("nickname_UNIQUE", ["nickname"], { unique: true })
@Entity("Users", { schema: "weather-station" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("varchar", { name: "nickname", unique: true, length: 50 })
  nickname: string;

  @Column("varchar", { name: "password", length: 50 })
  password: string;

  @Column("datetime", { name: "createdAt", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @OneToMany(() => Station, (stations) => stations.user)
  stations: Station[];
}
