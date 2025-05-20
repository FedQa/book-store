"use client";

import React, {useEffect, useState} from "react";
import {Book} from "@/shared/types/book";
import {loadingStore} from "@/shared/model/loadingStore";
import {debounce} from "@/shared/lib/debounce";
import {BackwardOutlined, HeartTwoTone, ShoppingTwoTone} from "@ant-design/icons";
import {Card, Divider, Typography} from "antd";
import {cartStore} from "@/entities/cart/model/cartStore";
import styles from './page.module.css'
import {useParams} from "next/navigation";
import Link from "next/link";


interface BookPageProps {
    params: { id: string }
}


export default function BookPage() {
    const [book, setBook] = useState<Book | null>(null);
    const params = useParams();
    const setIsLoading = loadingStore(state => state.setIsLoading);
    const addToCart = cartStore(state => state.addToCart);

    useEffect(() => {
        async function getBook(id: string) {
            try {
                setIsLoading(true);
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
                const data = await response.json();
                console.log(data);
                setBook(data);
            } catch (error) {
                console.log(error);
            } finally {
                await debounce(2000);
                setIsLoading(false);
            }
        }

        getBook(params?.id as string);

    }, []);

    return (
        <div className="container mx-auto p-4">
            {book && <Card title={book.volumeInfo.title}
                           className={styles.bookPage}
                           classNames={{
                               body: "bookPageBody",
                           }}
                           actions={[
                               <HeartTwoTone key="edit"/>,
                               <ShoppingTwoTone key="ellipsis" onClick={() => {
                                   addToCart(book);
                               }}
                               />,
                           ]}
                           styles={{
                               body: {
                                   display: "flex",
                                   flexDirection: "column",
                               }
                           }}
                           extra={
                            <Link href={`/books`}>
                                <BackwardOutlined />
                           </Link>}
            >
                <div className={styles.bookPageBody}>
                    <Typography.Paragraph>
                        {book.volumeInfo.description}
                    </Typography.Paragraph>
                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt="bookImg" style={{width: 200}}/>
                </div>

                <Divider dashed={true} className={styles.divider}/>

                <Typography.Paragraph>{book.volumeInfo.publishedDate}</Typography.Paragraph>
                <Typography.Paragraph>{book.volumeInfo.categories}</Typography.Paragraph>
                <Typography.Paragraph>{book.volumeInfo.publisher}</Typography.Paragraph>

                <Divider dashed={true} className={styles.divider}/>
                <Typography.Paragraph>{book.saleInfo?.listPrice?.currencyCode}</Typography.Paragraph>
                <Typography.Paragraph>{book.saleInfo?.listPrice?.amount}</Typography.Paragraph>
                <Typography.Paragraph>{book.saleInfo?.country}</Typography.Paragraph>

            </Card>
            }
        </div>
    )
}