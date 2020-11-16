import { RowEntity } from "src/modules/shared/row.entity";
import { Column, Entity } from "typeorm";

@Entity({name:'product'})
export class ProductEntity extends RowEntity{
   @Column({unique:true,nullable: true,type: "varchar", length: 100})
   title: string;
   @Column({})
   description:Text;
   @Column({default: null,type: "varchar", length: 100})
   provider: string;
   @Column({default: null,type: "varchar", length: 100})
   manufacturer: string;
   @Column({default: null,type: "varchar", length: 100})
   category: string;
   @Column({default: null,type:"datetime"})
   manufacture_date:Date;
   @Column({default: null,type: "varchar", length: 100})
   country:string;

}