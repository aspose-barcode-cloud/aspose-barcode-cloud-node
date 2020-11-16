# Usage:
# docker build github.com/aspose-barcode-cloud/aspose-barcode-cloud-node -t barcode-cloud-node:$(git describe --tags)
# docker run barcode-cloud-node:$(git describe --tags)

FROM node:14

WORKDIR /aspose-barcode-cloud-node
COPY . .
RUN npm ci

ENTRYPOINT ["make"]
CMD ["publish"]
