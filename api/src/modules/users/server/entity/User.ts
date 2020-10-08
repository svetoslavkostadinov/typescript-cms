/**
 * Created By: Svet Kostadinov on 01/11/2019
 */
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";

@Entity()
@Unique(["username", "email"])
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @Length(1, 30)
    firstName!: string;

    @Column()
    @Length(1, 30)
    lastName!: string;

    @Column()
    @Length(1, 30)
    email!: string;

    @Column()
    @Length(4, 20)
    username!: string;

    @Column()
    @Length(4, 100)
    password!: string;

    @Column()
    @IsNotEmpty()
    role!: string;

    @Column()
    @CreateDateColumn()
    createdAt!: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt!: Date;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
}