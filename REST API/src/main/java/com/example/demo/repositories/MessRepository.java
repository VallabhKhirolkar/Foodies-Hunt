package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Consumer;
import com.example.demo.entities.Mess;

@Transactional
@Repository
public interface MessRepository extends JpaRepository<Mess, Integer> 
{
	 
	 @Query(value="select * from mess  where loginid= ?1 and approvalstatus='Approved' ",nativeQuery=true)
		public Optional<Mess> getByLoginId(int no);
	 
	 @Query(value="select * from mess where approvalstatus='Approved'",nativeQuery=true)
		public List<Mess> fetchAllMess();
	 
	 @Query(value="select * from mess where messid= ?1",nativeQuery=true)
		public Mess getByMessId(int id);
	 
	 @Modifying
	 @Query(value="update mess set approvalstatus='Approved' where messid=?1",nativeQuery=true)
	 public int approveonlymess(int messid);
	
}
