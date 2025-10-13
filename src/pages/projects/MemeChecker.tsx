import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  Brain,
  Image,
  Type,
  Zap,
  Layers,
  BarChart3,
  Eye,
  FileText,
  CheckCircle2,
  Sparkles,
  Rocket,
  Cpu,
  Network,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const MemeChecker = () => {
  const techStack = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "GPT-4",
    "Computer Vision",
    "NLP",
    "OCR (Tesseract)",
    "Transformers",
    "OpenCV",
    "scikit-learn",
  ];

  const keyFeatures = [
    {
      icon: Layers,
      title: "Multimodal AI Architecture",
      description: "Built sophisticated AI system that simultaneously analyzes both image and text components of memes, combining computer vision and natural language processing for comprehensive understanding.",
    },
    {
      icon: Network,
      title: "Early & Late Fusion Models",
      description: "Implemented both early and late fusion strategies to capture visual-linguistic features, enabling the model to understand complex relationships between image content and textual elements.",
    },
    {
      icon: Image,
      title: "Advanced Image Processing",
      description: "Utilized state-of-the-art computer vision techniques including CNNs and vision transformers to extract meaningful visual features from meme images for accurate classification.",
    },
    {
      icon: Type,
      title: "Natural Language Processing",
      description: "Employed advanced NLP models including GPT-4 for text analysis, sentiment detection, and contextual understanding of meme captions and overlaid text.",
    },
    {
      icon: Eye,
      title: "OCR Text Extraction",
      description: "Integrated Optical Character Recognition (OCR) using Tesseract to extract text from meme images, enabling comprehensive analysis of both embedded and separate text components.",
    },
    {
      icon: BarChart3,
      title: "Content Understanding & Trends",
      description: "Developed comprehensive content analysis pipeline for meme classification, trend detection, and pattern recognition to understand viral content dynamics.",
    },
  ];

  const projectHighlights = [
    {
      category: "Model Architecture",
      items: [
        "Multimodal fusion architecture combining vision and language models",
        "Early fusion for joint feature learning from raw inputs",
        "Late fusion for independent feature extraction and combination",
        "Ensemble methods for improved classification accuracy",
      ],
    },
    {
      category: "Technical Implementation",
      items: [
        "PyTorch and TensorFlow for deep learning frameworks",
        "Transfer learning with pre-trained vision models (ResNet, ViT)",
        "Fine-tuned language models for text understanding",
        "Custom loss functions for multimodal optimization",
      ],
    },
    {
      category: "Performance & Results",
      items: [
        "Achieved 95%+ accuracy on test dataset",
        "Robust performance across diverse meme formats",
        "Real-time inference capabilities for production deployment",
        "Comprehensive evaluation on multiple metrics (precision, recall, F1)",
      ],
    },
    {
      category: "Data Processing Pipeline",
      items: [
        "OCR integration for text extraction from images",
        "Image preprocessing and augmentation techniques",
        "Text normalization and tokenization pipelines",
        "Efficient data loading and batching strategies",
      ],
    },
  ];

  const technicalDetails = [
    {
      title: "Computer Vision Pipeline",
      icon: Image,
      description: "Implemented advanced image processing using PyTorch and TensorFlow. Utilized pre-trained CNNs (ResNet, EfficientNet) and Vision Transformers for feature extraction. Applied data augmentation, normalization, and transfer learning to achieve robust visual understanding.",
      technologies: ["PyTorch", "TensorFlow", "OpenCV", "Vision Transformers", "CNNs", "Transfer Learning"],
    },
    {
      title: "Natural Language Processing",
      icon: Brain,
      description: "Developed comprehensive NLP pipeline using transformer-based models. Integrated GPT-4 for advanced text analysis, sentiment detection, and contextual understanding. Implemented custom tokenization and embedding strategies for meme-specific language patterns.",
      technologies: ["GPT-4", "Transformers", "BERT", "Word Embeddings", "Sentiment Analysis", "Text Classification"],
    },
    {
      title: "Multimodal Fusion Strategies",
      icon: Network,
      description: "Engineered both early and late fusion architectures. Early fusion combines raw features before processing, while late fusion processes modalities independently before combination. Implemented attention mechanisms to weigh modality importance dynamically.",
      technologies: ["Early Fusion", "Late Fusion", "Attention Mechanisms", "Feature Concatenation", "Cross-Modal Learning"],
    },
    {
      title: "OCR & Text Extraction",
      icon: FileText,
      description: "Integrated Tesseract OCR for extracting text from meme images. Developed preprocessing pipeline for image enhancement, text localization, and post-processing for improved accuracy. Handled various fonts, sizes, and image quality conditions.",
      technologies: ["Tesseract OCR", "Image Preprocessing", "Text Detection", "Post-processing", "Quality Enhancement"],
    },
  ];

  const projectMetrics = [
    { label: "Accuracy", value: "95%+", icon: Target },
    { label: "Framework", value: "PyTorch/TF", icon: Cpu },
    { label: "Modality", value: "Vision + NLP", icon: Brain },
    { label: "Status", value: "Production", icon: CheckCircle2 },
  ];

  const fusionStrategies = [
    {
      title: "Early Fusion Architecture",
      description: "Combines raw image and text features at the input level before processing through neural networks. This approach enables the model to learn joint representations from the beginning, capturing early interactions between visual and textual elements for integrated understanding.",
      icon: Layers,
    },
    {
      title: "Late Fusion Architecture",
      description: "Processes image and text modalities independently through separate neural networks, then combines the learned features at decision level. This strategy allows each modality to develop specialized representations before integration, improving robustness.",
      icon: Network,
    },
    {
      title: "Attention-Based Fusion",
      description: "Implements attention mechanisms to dynamically weight the importance of visual and textual features. The model learns which modality is more informative for specific classification tasks, enabling adaptive fusion based on content characteristics.",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:px-6">
        <div className="container mx-auto">
          {/* Back Button */}
          <Link to="/work" className="inline-flex items-center text-accent hover:text-accent/80 mb-8 group transition-all">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Projects</span>
          </Link>

          {/* Project Header */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-cta/30 text-cta border-0 text-lg px-4 py-1">AI Engineer</Badge>
              <Badge variant="outline" className="border-accent/30 text-accent text-lg px-4 py-1">2024</Badge>
              <Badge variant="outline" className="border-green-500/30 text-green-500 text-lg px-4 py-1">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                Approved
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-heading font-bold text-gradient">
                Multimodal Meme Classification
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-accent via-cta to-accent rounded-full"></div>
            </div>

            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl font-heading">
              Advanced AI System Combining Computer Vision and NLP for Comprehensive Meme Analysis and Classification
            </p>
          </div>
        </div>
      </section>

      {/* Project Metrics */}
      <section className="relative py-12 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectMetrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center glass-card rounded-xl p-6 text-center space-y-3 hover:border-accent/40 transition-all hover-lift group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <Icon className="w-8 h-8 text-accent mx-auto group-hover:scale-110 transition-transform" />
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">{metric.label}</p>
                    <p className="text-xl font-heading font-bold text-foreground">{metric.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Project Overview</h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-lg leading-relaxed">
                The <span className="text-accent font-semibold">Multimodal Meme Classification</span> project represents a cutting-edge approach to content analysis by combining computer vision and natural language processing. This AI system analyzes both the visual and textual components of memes to achieve comprehensive understanding and accurate classification.
              </p>
              
              <p className="text-lg leading-relaxed">
                Built with <span className="text-accent font-semibold">PyTorch and TensorFlow</span>, the system implements sophisticated multimodal fusion architectures. Both early and late fusion strategies are employed to capture visual-linguistic features, enabling the model to understand complex relationships between image content and textual elements that make memes culturally significant.
              </p>

              <p className="text-lg leading-relaxed">
                The project integrates <span className="text-cta font-semibold">Optical Character Recognition (OCR)</span> using Tesseract to extract text from meme images, combined with advanced NLP techniques including GPT-4 for contextual understanding. This comprehensive approach enables the system to analyze embedded text, image content, and their interplay for accurate classification and trend analysis.
              </p>

              <p className="text-lg leading-relaxed">
                Achieving <span className="text-accent font-semibold">95%+ accuracy on test datasets</span>, the system demonstrates robust performance across diverse meme formats and styles. The combination of state-of-the-art computer vision models, transformer-based language understanding, and intelligent fusion strategies creates a powerful tool for content analysis and moderation.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="pt-6 border-t border-accent/10">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                <Cpu className="w-6 h-6 mr-2 text-accent" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="border-accent/30 text-accent/90 text-sm px-3 py-1 hover:bg-accent/10 hover:border-accent/50 transition-all"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-16 md:px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground">
              Advanced capabilities powering multimodal analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-6 space-y-4 hover:border-accent/40 transition-all hover-lift group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-cta/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fusion Strategies */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Fusion Strategies</h2>
            <p className="text-xl text-muted-foreground">
              Multimodal integration approaches for optimal performance
            </p>
          </div>

          <div className="space-y-6">
            {fusionStrategies.map((strategy, idx) => {
              const Icon = strategy.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-heading font-semibold text-gradient">{strategy.title}</h3>
                    <Icon className="w-6 h-6 text-cta flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {strategy.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="relative py-16 md:px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Technical Implementation</h2>
            <p className="text-xl text-muted-foreground">
              Deep learning architectures and processing pipelines
            </p>
          </div>

          <div className="space-y-6">
            {technicalDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-heading font-semibold text-gradient">{detail.title}</h3>
                    <Icon className="w-6 h-6 text-cta flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {detail.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {detail.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Project Highlights</h2>
            <p className="text-xl text-muted-foreground">
              Technical achievements and implementation details
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectHighlights.map((section, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-8 space-y-6 hover:border-accent/40 transition-all hover-lift"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-2xl font-heading font-semibold flex items-center">
                  <Target className="w-6 h-6 mr-3 text-accent" />
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="relative py-16 md:px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Challenges & Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Overcoming multimodal learning obstacles
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Multimodal Feature Alignment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Synchronizing and aligning features from fundamentally different modalities (images and text) with varying dimensionalities and semantic spaces.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Implemented projection layers to map visual and textual features into a common embedding space. Used attention mechanisms to learn cross-modal correspondences and developed custom loss functions that encourage semantic alignment between modalities, resulting in robust multimodal representations.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: OCR Accuracy in Diverse Conditions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Extracting text from meme images with varying fonts, sizes, colors, backgrounds, and image quality posed significant challenges for accurate OCR.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Developed comprehensive image preprocessing pipeline including adaptive thresholding, contrast enhancement, and noise reduction. Implemented ensemble OCR approach combining multiple recognition methods. Added post-processing with spell-checking and context-aware correction to improve final text accuracy.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 space-y-4 hover:border-accent/40 transition-all hover-lift">
              <h3 className="text-2xl font-heading font-semibold text-accent">Challenge: Context Understanding and Cultural Nuances</h3>
              <p className="text-muted-foreground leading-relaxed">
                Memes rely heavily on cultural context, internet slang, and implicit references that are challenging for AI models to understand.
              </p>
              <div className="pl-4 border-l-4 border-cta/30">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="text-cta font-semibold">Solution:</span> Leveraged GPT-4's contextual understanding capabilities and fine-tuned models on meme-specific datasets. Implemented knowledge distillation from large language models to capture cultural patterns. Created custom embedding spaces that encode meme-specific linguistic features and visual tropes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 bg-gradient-to-br from-card/90 via-accent/5 to-card/90">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-8 h-8 text-accent" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Results & Impact</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">95%+</div>
                <p className="text-muted-foreground">Classification Accuracy</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">2 Modalities</div>
                <p className="text-muted-foreground">Vision + Language</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl font-heading font-bold text-gradient">Real-Time</div>
                <p className="text-muted-foreground">Inference Capability</p>
              </div>
            </div>

            <div className="pt-6 border-t border-accent/10">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                The Multimodal Meme Classification system demonstrates the power of combining computer vision and natural language processing for comprehensive content analysis. By integrating early and late fusion strategies with OCR capabilities, the project achieves robust performance across diverse meme formats, providing valuable insights for content moderation, trend analysis, and understanding viral internet culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:px-6">
        <div className="container mx-auto max-w-6xl flex flex-col items-center">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-primary via-card/80 to-primary border-accent/30 hover:border-accent/50 transition-all group">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Interested in AI & Machine Learning Projects?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can develop innovative AI solutions that combine multiple modalities for your next project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="group bg-cta hover:bg-cta/90 text-cta-foreground font-heading font-semibold text-lg px-8 py-6 glow-gold hover:scale-110 transition-all"
                >
                  Get in Touch
                  <Rocket className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/work">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 font-heading font-semibold text-lg px-8 py-6 hover:scale-105 transition-all"
                >
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  View More Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemeChecker;
