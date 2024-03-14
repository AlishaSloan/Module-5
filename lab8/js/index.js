









application.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})