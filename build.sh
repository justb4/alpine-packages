docker run \
        -e RSA_PRIVATE_KEY="$(cat ~/.abuild/brett@neese.rocks.rsa)" \
        -e RSA_PRIVATE_KEY_NAME="brett@neese.rocks.rsa" \
        -v "$PWD:/home/builder/package" \
        -v "$PWD/packages:/packages" \
        -v "$PWD/.abuild/brett@neese.rocks.rsa.pub:/etc/apk/keys/brett@neese.rocks.rsa.pub" \
        andyshinn/alpine-abuild:v3
