import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class Transaction {
    constructor(props?: Partial<Transaction>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    block!: number

    @Index_()
    @Column_("text", {nullable: false})
    from!: string

    @Index_()
    @Column_("text", {nullable: true})
    to!: string | undefined | null

    @Index_()
    @Column_("text", {nullable: false})
    txnHash!: string
}
