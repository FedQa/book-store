import {Card} from "antd";
import {Book} from "@/shared/types/book";
import { Typography } from "antd";
import styles from './BookCard.module.css'
import {
    DeleteTwoTone,
    HeartTwoTone,
    ShoppingTwoTone
} from "@ant-design/icons";
import {cartStore} from "@/entities/cart/model/cartStore";

interface IBookCardProps {
    book: Book;
    isInCart?: boolean;
}

export const BookCard = (props:IBookCardProps) => {
    const {book, isInCart} = props;

    const addToCart = cartStore(state => state.addToCart);
    const cart = cartStore(state => state.cart);

    return (
            <Card title={book.volumeInfo.title}
                  extra={<a href="#">More</a>}
                  style={{ width: 300 }}
                  className={styles.bookCard}
                  actions={[
                      <HeartTwoTone key="edit" />,
                      <ShoppingTwoTone key="ellipsis" onClick={() => {
                          addToCart(book);
                      }}
                      />,
                      isInCart && <DeleteTwoTone />
                  ]}
            >
                <Typography.Paragraph ellipsis={true}>
                    {book.volumeInfo.description}
                </Typography.Paragraph>
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt="bookImg" />
            </Card>
    )
}