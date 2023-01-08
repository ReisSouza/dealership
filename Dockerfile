FROM node

WORKDIR /user/app

COPY package.json ./

COPY ./prisma prisma

COPY ./src src

RUN npm install 


COPY . .

RUN npm i -g prisma

RUN prisma generate

EXPOSE 3000

CMD ["npm","rum","dev"]