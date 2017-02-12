#!/bin/bash

clear

ROUTE="localhost:8080/api/v1/send"
METHOD="POST"

echo "============"
echo "CURL $METHOD for $ROUTE"
echo "============"
echo ""
echo "Response ---"

curl -H "Content-Type: application/json" -X $METHOD --data '{"name": "robert", "email": "robert@domain.com", "message": "short message"}' $ROUTE

echo ""
echo "End Response"