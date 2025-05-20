"use client";

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
import Link from "next/link";

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
                  extra={
                      <Link href={`/book/${book.id}`}>
                          <p>More...</p>
                      </Link>

                  }
                  style={{ width: 300 }}
                  className={styles.bookCard}
                  actions={[
                      <HeartTwoTone key="edit" />,
                      <ShoppingTwoTone key="ellipsis" onClick={() => {
                          addToCart(book);
                      }}
                      />,
                      isInCart ? <DeleteTwoTone /> : null,
                  ].filter(Boolean)}
            >
                <div className={styles.body}>
                    <Typography.Paragraph ellipsis={true}>
                        {book.volumeInfo.description}
                    </Typography.Paragraph>
                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt="bookImg" />

                    <Typography.Text>
                        Authors: {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 &&
                        book.volumeInfo.authors.join(", ")
                    }
                    </Typography.Text>

                    <Typography.Text>
                        Publisher: {book.volumeInfo.publisher && book.volumeInfo.publisher.length > 0 && book.volumeInfo.publisher}
                    </Typography.Text>

                    <Typography.Text>
                        Page count: {book.volumeInfo.pageCount && book.volumeInfo.pageCount}
                    </Typography.Text>
                </div>
            </Card>
    )
}