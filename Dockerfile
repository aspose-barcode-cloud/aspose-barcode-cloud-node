# Usage:
# docker build github.com/aspose-barcode-cloud/aspose-barcode-cloud-node -t barcode-cloud-node:$(git describe --tags)
# docker run barcode-cloud-node:$(git describe --tags) publish -e "TEST_CONFIGURATION_ACCESS_TOKEN=" -e "NPM_TOKEN="

FROM node:lts

WORKDIR /aspose-barcode-cloud-node
COPY . .
RUN echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' > .npmrc

ENTRYPOINT ["make", "publish-docker"]
