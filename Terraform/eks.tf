provider "kubernetes" {
  load_config_file = false

  host                   = data.aws_eks_cluster.app.endpoint
  token                  = data.aws_eks_cluster_auth.app.token
  cluster_ca_certificate = base64decode(data.aws_eks_cluster.app.certificate_authority[0].data)
}


data "aws_eks_cluster" "app" {
  name       = module.eks.cluster_name
  depends_on = [module.eks]
}

data "aws_eks_cluster_auth" "app" {
  name       = module.eks.cluster_name
  depends_on = [module.eks]
}

module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 21.0"

  name               = "app-cluster"
  kubernetes_version = "1.33"

  addons = {
    coredns                = {}
    eks-pod-identity-agent = {
      before_compute = true
    }
    kube-proxy             = {}
    vpc-cni                = {
      before_compute = true
    }
  }

  endpoint_public_access = true
  endpoint_private_access = true

  enable_cluster_creator_admin_permissions = true


  vpc_id                   = module.vpc.vpc_id
  subnet_ids               = module.vpc.private_subnets


  eks_managed_node_groups = {
    app = {
      ami_type       = "AL2023_x86_64_STANDARD"
      instance_types = ["t3.small"]

      min_size     = 4
      max_size     = 6
      desired_size = 5
    }
  }

  tags = {
    Environment = "dev"
    Terraform   = "true"
  }
}