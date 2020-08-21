import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
} from "typeorm";
import { Station } from "./station";

@Index("fk_Values_Stations1_idx", ["stationId"], {})
@Entity("Values", { schema: "weather-station" })
export class Value extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "stationId" })
  stationId: string;

  @Column("float", { name: "temperature", precision: 12 })
  temperature: number;

  @Column("datetime", { name: "createdAt", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @ManyToOne(() => Station, (stations) => stations.values, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "stationId", referencedColumnName: "id" }])
  station: Station;
}
