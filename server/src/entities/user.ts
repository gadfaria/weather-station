import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeInsert,
} from "typeorm";
import { Station } from "./station";
import { hashSync } from "bcrypt";

@Index("nickname_UNIQUE", ["nickname"], { unique: true })
@Entity("Users", { schema: "weather-station" })
export class User extends BaseEntity {
  constructor(user: User) {
    super();
    Object.assign(this, { ...user });
  }


  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("varchar", { name: "nickname", unique: true, length: 50 })
  nickname: string;

  @Column("varchar", { name: "password", length: 200 })
  password: string;

  @Column("datetime", { name: "createdAt", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @OneToMany(() => Station, (stations) => stations.user)
  stations: Station[];

  @BeforeInsert()
  private passwordHash() {
    this.password = hashSync(this.password, 10);
  }
}
