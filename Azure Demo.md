# Azure Demo

## Commands

### create resource group
```
az group create --name myResourceGroup_MSTest3 --location uksouth
```
### create container registry within resource group
```
az acr create --resource-group myResourceGroup_MSTest3 --name mycontainerregistrymstest3 --sku Basic
```
### set admin to true
```
az acr update -n mycontainerregistrymstest3 --admin-enabled true
```
### login to container registry via docker
```
docker login mycontainerregistrymstest3.azurecr.io
```
### tag existing images with registry
```
docker tag image-name mycontainerregistrymstest3.azurecr.io/samples/image-name
docker push mycontainerregistrymstest3.azurecr.io/samples/image-name
```
### create aks cluster
```
az aks create --resource-group myResourceGroup_MSTest3 --name myaksclustermstest3 --node-count 1 --generate-ssh-keys --attach-acr mycontainerregistrymstest3 --min-count 1 --max-count 10 --node-vm-size Standard_A2_v2
```
### link cluster to local kubernetes cli
```
az aks get-credentials --resource-group myResourceGroup_MSTest3 --name myaksclustermstest3
```
### view images in registry
```
az acr repository list --name mycontainerregistrymstest3 --output table
```
### show nodes in terminal
```
kubectl get nodes
```
### update aks to link acr
```
az aks update --name myaksclustermstest3 --resource-group myResourceGroup_MSTest3 --attach-acr mycontainerregistrymstest3
```
### confirm image pull success
```
az aks check-acr --resource-group myResourceGroup_MSTest3 --name myaksclustermstest3 --acr mycontainerregistrymstest3
```
### get login
```
az acr list --resource-group myResourceGroup_MSTest3 --query "[].{acrLoginServer:loginServer}" --output table
```
### briefly explain kubernetes-manifest.yaml
```
kubectl apply -f kubernetes-test.yaml
```
### scale deployment
```
kubectl scale --replicas=0 deployments/trading-app-ui
```
### hpa
```
kubectl apply -f kubernetes-test-hpa.yaml
kubectl delete hpa trading-app-ui-hpa
```
