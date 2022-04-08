import { Box, Container, Grid, Typography } from '@mui/material'
import styles from '../../styles/Home.module.scss'
import Image from 'next/image'
import React from 'react'

export default function PageHeader() {
    return (
        <>
            <Container className={styles.PageHeader} maxWidth="xxl">
                <Container>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Image src="/image/page-header.png" alt="Arkan Proje" width={600} height={500} />
                        </Grid>
                        <Grid item xs={12} md={6} className={styles.PageHeaderTexts}>
                            <Typography variant="h3" gutterBottom>
                                EBRULi ISPARTAKULE
                            </Typography>
                            <Typography>
                                Proje, İstanbulun Avrupa Yakasında bulunan Bahçeşehir Mahallesi sınırları içericisinde yer alan ve önemli yatırım bölgesi olarak kabul edilen Ispartakule’de yükselmektedir.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={styles.PageHeaderBottomLogo}>
                            <Image src="/image/bottom-logo.svg" alt="Arkan Proje" width={150} height={150} />
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <Container>
                <Grid item xs={12} className={styles.PageHeaderBottomTexts}>
                    <Typography variant="h3" gutterBottom>
                        EBRULİ ISPARTAKULE
                    </Typography>
                    <Typography>
                        Proje, İstanbulun Avrupa Yakasında bulunan Bahçeşehir Mahallesi sınırları içericisinde yer alan ve önemli yatırım bölgesi olarak kabul edilen Ispartakule’de yükselmektedir.
                    </Typography>
                </Grid>
            </Container>
        </>
    )
}
