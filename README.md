# payload-board

a node bulletin board using mongo and payload cms

## architectural overview

Bulletin boards are a kind of user-generated content system, so a CMS framework is a good fit.

Our system requirements include the use of node.js and mongo. To keep costs low, I elected to use a forever-free instance of [Mongo DB Atlas](https://www.mongodb.com/products/platform/atlas-database).

A modern off-the-shelf Node CMS with Mongo support is Payload CMS. Payload wraps an Express server. Payload integrates with Next.js, today's best-in-class web framework, which is applied here to make deployment over Vercel convenient. As a side effect, this implementation is serverless and would be cost efficient in practice.

There's no need to include Next in the current toy app, but in a real use case this architecture is scalable, secure, maintanable, and extensible.

## data model

There are two business entities beyond the standard Payload entities:

1. BulletinBoard
2. BulletinBoardMessage

## useful links

1. [Install Payload Into Any Next.js App With One Line — 3.0 Beta Is Here!](https://www.youtube.com/watch?v=CZ7a-dx3Glw)
