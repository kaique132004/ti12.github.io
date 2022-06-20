<?php 
    require_once('conexao.php');

    try{
        $conexao = Conexao::LigarConexao();
        $conexao->exec('SET NAMES UTF8');

        if(!$conexao){
            echo "Não foi possivel estabelecer uma conexao com o banco";
        }

        if(isset($_GET['idCliente'])){
            $idCliente = $_GET['idCliente'];
            $query = $conexao->prepare("SELECT R.*, S.* FROM reserva R INNER JOIN servico S ON R.idServico = S.idServico WHERE idCliente = $idCliente ORDER BY dataReserva ASC;");
            $query->execute();
            $json = array();

            while($r = $query->fetch(PDO::FETCH_ASSOC)){
                array_push($json, $r);
            }

            echo json_encode($json, JSON_UNESCAPED_UNICODE);
        }
    }catch (Exception $e){
        echo "Erro ", $e->getMessage();
    }
?>