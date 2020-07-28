

# package cloudformation
aws cloudformation package  --s3-bucket cloud-challenge-sam --template-file template.yaml --output-template-file template-generated.yaml
# sam package ... 

# deploy 
aws cloudformation deploy --template-file template-generated.yaml --stack-name cloud-challenge-stack --capabilities CAPABILITY_IAM