CREATE TABLE products(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65, 30) NOT NULL
);
CREATE TABLE users(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL
);
CREATE TABLE orders(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "status" TEXT NOT NULL,
    "userId" INTEGER NOT NULL
);
CREATE TABLE order_details (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "qty" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL
);
ALTER TABLE orders
ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES users("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE order_details
ADD CONSTRAINT "OrderDetail_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES orders("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE order_details
ADD CONSTRAINT "OrderDetail_productId_fkey" FOREIGN KEY ("productId") REFERENCES products("id") ON DELETE RESTRICT ON UPDATE CASCADE;