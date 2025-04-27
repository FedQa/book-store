import {Card} from "antd";
import {Book} from "@/shared/types/book";
import { Typography } from "antd";
import styles from './BookCard.module.css'

interface IBookCardProps {
    book: Book;
}

export const BookCard = (props:IBookCardProps) => {
    const {book} = props;
    return (
            <Card title={book.volumeInfo.title} extra={<a href="#">More</a>} style={{ width: 300 }} className={styles.bookCard}>
                <Typography.Paragraph ellipsis={true}>
                    {book.volumeInfo.description}
                </Typography.Paragraph>
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt="bookImg" />
            </Card>
    )
}